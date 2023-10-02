const Packing = require('../models/Packing')
const User = require('../models/User')

module.exports = {
    getPacking: async (req, res) => {
        console.log(req.user)
            try {
            //   const user = await User.find({ user: req.user.id });
            //   res.render("packing.ejs", { user: req.user });
              const packingItem = await Packing.find({userId:req.user.id});
              const itemsLeft = await Packing.countDocuments({userId:req.user.id,completed: false});
              res.render('packing.ejs', {items: packingItem, left: itemsLeft, user: req.user});
            } catch (err) {
              console.log(err);
            }
          
        // try{
        //     const packingItems = await Packing.findOne({userId:req.user.id})
        //     const itemsLeft = await Packing.countDocuments({userId:req.user.id,completed: false})
        //     res.render('packing.ejs', {Items: packingItems, left: itemsLeft, user: req.user})
        // }catch(err){
        //     console.log(err)
        // }
    },
    createItem: async (req, res)=>{
        try{
            await Packing.create({item: req.body.packingItem, category: req.body.category, completed: false, userId: req.user.id})
            console.log('Item has been added!')
            res.redirect('/packing')
        }catch(err){
            console.log(err)
        }
    },
    selectItem: async (req, res)=>{
        try{
            await Packing.create({item: req.body.selectItem, category: req.body.submit, completed: false, userId: req.user.id})
            console.log('Item has been added!')
            res.redirect('/packing')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Packing.findOneAndUpdate({_id:req.body.packingIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Packing.findOneAndUpdate({_id:req.body.packingIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req, res)=>{
        console.log(req.body.packingIdFromJSFile)
        try{
            await Packing.findOneAndDelete({_id:req.body.packingIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted Item')
        }catch(err){
            console.log(err)
        }
    }
}