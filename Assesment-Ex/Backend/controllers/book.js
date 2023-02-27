import { response } from 'express'
import { get } from 'mongoose';
import Model from '../models/book.js'


class Controller {
    getAll (req, res, next) {
        Model.find({}, (err, response)=> {
            if (err) return next(err);
            res.status(200).send({ success: true, response});
    })
}


get (req, res, next) {
    let { id } = req.params;
    Model.findOne({_id: id}, (err, response)=> {
        if (err) return next(err);
        res.status(200).send({ success: true, response});
});
}

delete(req, res, next) {
    let { id } = req.params;
    bookModel.findByIdAndDelete({_id: id}, (err,response)=> {
        if (err) return next(err);
        res.status(200).send({ success: true, response});
    
    })

}

softDelete(req, res, next){
    let { id } = req.params;
    bookModel.updateOne({_id: id}, {
        $set: { isDeleted: true }

    }, (err, response)=> {
        if(err) return next(err);
        res.status(200).send({success:true, response});
    } )
}



}

export default Controller;