import Limit from "../config/upstash.js";

const rateLimiter = async (req,res,next) => {
    try{
        const {success} = await Limit.limit("my-limit-key")

        if (!success){
            return res.status(429).json({message: 'Too many requests, please try again later.'})

        }

        next();

    } catch(err){
        console.log('Error in rate limiter middleware:', err);
        next(err);

    }
}

export default rateLimiter;