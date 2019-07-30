var express = require("express");
var router = express.Router();
var past_order = require("../model/bill_model");
router.get('/:id',function(req,res,next){
    past_order.GetPastOrder(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
   });
   module.exports = router;