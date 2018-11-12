const Articulo = require('../Models/articulo');
const articulocontroller = {};

articulocontroller.getAllArticulos = async (req,res) =>{
     const articulos = await Articulo.find();
     res.json(articulos);
};
articulocontroller.getArticulosByName = async (req,res) =>{
     console.log(req.body.busqueda);
     const articulos = await Articulo.find({$or:[  {title: {$regex:req.body.busqueda}},{content:{$regex:req.body.busqueda}}  ]});
     res.json(articulos);
};
articulocontroller.getArticulosByVisits = async (req,res) =>{
     console.log(req.body.busqueda);
     const articulos = await Articulo.find({visits:{$gte:req.params.visits}});
     res.json(articulos);
};
articulocontroller.createArticulo = async (req,res) =>{
     const articulo = new Articulo(req.body);
     await articulo.save();
     res.json({status:'articulo saved'});
};
articulocontroller.editArtitculo = async (req,res) =>{
     const {id}=req.params;
     const articulo = {
          title: req.body.title,
          content: req.body.content,
          visits: req.body.visits
     }
     await Articulo.findByIdAndUpdate(id,{$set:articulo},{new:true});
     res.json({status:'articulo updated'});
};
articulocontroller.deleteArticulo= async (req,res) => {
     await Articulo.findByIdAndRemove(req.params.id);
     res.json({status:'articulo deleted'});
}

module.exports = articulocontroller;
