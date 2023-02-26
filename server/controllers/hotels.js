const hotelmodel = require('../models/hotels')
const {StatusCodes} = require('http-status-codes')
const createError = require('../utils/error')


// CREATING A HOTEL

const createhotel = async(req, res, next)=>{

    try{

        const hotel = await hotelmodel.create({...req.body})

        res.status(StatusCodes.CREATED).json({hotel})

    }

    catch(err){

        // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

        next(err)
    }

}


    //UPDATE A HOUSE    


    const updatehotel = async(req, res, next)=>{

        try{

            const {id:hotelID} = req.params

            const hotel = await hotelmodel.findByIdAndUpdate({_id:hotelID}, req.body, {
                new:true,
                runValidators:true
            })

            if(!hotel){

                res.status(StatusCodes.NOT_FOUND).json({msg: `Hotel with the Id ${hotelID} cannot be not found`})
            }

            res.status(StatusCodes.OK).json({hotel})

        }


        catch(err){

            // res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
            next(err)
        }


    }


    //DELETE A HOUSE

    const deletehotel = async(req, res,next)=>{

        try{

        
            const {id:hotelID} = req.params

            const hotel = await hotelmodel.findByIdAndDelete({_id:hotelID} )

            if(!hotel){

                res.status(StatusCodes.NOT_FOUND).json({msg: `Hotel with the Id ${hotelID} cannot be not found`})
            }

            res.status(StatusCodes.OK).json({msg:'hotel has been deleted.'})

        }

        catch(err){

            // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

            next(err)
        }

    }


    //getting single hotel

    const singlehotel = async(req, res, next)=>{

        try{

            const {id:hotelID} = req.params
            
            const hotel = await hotelmodel.findById({_id:hotelID})

            if(!hotel){

                res.status(StatusCodes.NOT_FOUND).json({msg:`Hotel with id ${hotelID} cannot be not found`})
            }

            res.status(StatusCodes.OK).json({hotel})

        }

        catch(err){

            // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
            next(err)

        }
    }


    //getting all hotels


    const getallhotels = async(req, res, next)=>{

       
        try{


            const hotel = await hotelmodel.find()

            res.status(StatusCodes.OK).json({hotel})
        }

        catch(err){

            // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

            next(err)
        }


    }





module.exports = {createhotel, updatehotel, deletehotel, singlehotel, getallhotels}