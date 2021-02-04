import { getRepository } from "typeorm";
import { Profile } from "../entities/Profile";
import { User } from "../entities/User";
import { sanitization } from "../utils/security";


interface profileData{
    username?: string
    bio?: string,
    image?: string,
    following?: boolean
}

export async function getAProfile(email: string, followingUserName: string): Promise<profileData> {
 
    try{
       const repo = getRepository(User)
       const frepo = getRepository(Profile)
       const _profile = await repo.findOne({username: followingUserName});

       if(!_profile) throw new Error('No user Exists')

       let profile: profileData={
           username: _profile.username,
           bio: _profile.bio,
           image:_profile.image
       };
       const follows = await frepo.findOne({followerEmail: email, followingEmail: _profile.email})
       if(email) {
           profile.following = !!follows
       }
       return profile
    }catch(e) {
        throw e
    }
}

export async function follow(email: string, username: string): Promise<profileData> {
    
    try {
       if(!email || !username) throw new Error("Follower email and username are not provided")

       const repo = getRepository(User)
       const frepo = getRepository(Profile)

       const followingUser = await repo.findOne({username})
       const followerUser = await repo.findOne(email)
    
       
       if(followerUser === followingUser) throw new Error("They must be different")

       const _follows = await frepo.findOne({followerEmail: followerUser?.email, followingEmail:followingUser?.email})

       if(!_follows) {
           const follows = new Profile();
           follows.followerEmail = followerUser?.email
           follows.followingEmail = followingUser?.email
           await frepo.save(follows)
       }
       let profile: profileData = {
         username: followingUser?.username,
         bio: followingUser?.bio,
         image: followingUser?.image,
         following: true
       };
       return profile
    }catch(e) {
        throw e
    }
}

export async function unfollow( followerEmail: string, username: string): Promise<profileData> {
    
    try {
        if(!followerEmail || !username) throw new Error('username and email could not be empty')
        
        const repo = getRepository(User)
        const frepo = getRepository(Profile)
    
        const followingUser = await repo.findOne({username})

        if(followingUser?.email === followerEmail) throw new Error('followingUser email and followeruser email must not be same')
    
        const followingEmail = followingUser?.email;
        await frepo.delete({followerEmail, followingEmail})

        const profile: profileData = {
          username: followingUser?.username,
          bio: followingUser?.bio,
          image: followingUser?.image,
          following: false
        }

        return profile
    }catch(e) {
        throw e
    }
}