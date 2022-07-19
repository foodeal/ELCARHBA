﻿const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const authorize = require('middleware/authorize')
const fService = require('./fichier.service');
const formidable = require('formidable');


// routes
router.post('/add', addSchema, add);
router.get('/', authorize(), getAll);
router.get('/current', authorize(), getCurrent);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);


module.exports = router;


function addSchema(req, res, next) {
    const schema = Joi.object({
        fiche: Joi.number(),
        analyse_matiere: Joi.number(),
        url: Joi.string().required(),
        type: Joi.string()
    });
    validateRequest(req, next, schema);
}

function add(req, res, next) {
    fService.create(req.body)
        .then(() => res.json({ message: 'File Uploaded' }))
        .catch(next);
}

function getAll(req, res, next) {
    fService.getAll()
        .then(fs => res.json(fs))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.f);
}

function getById(req, res, next) {
    fService.getById(req.params.id)
        .then(f => res.json(f))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        fiche: Joi.number().empty(),
        analyse_matiere: Joi.number().empty(),
        url: Joi.string().empty(),
        type: Joi.string().empty()
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    fService.update(req.params.id, req.body)
        .then(f => res.json(f))
        .catch(next);
}

function _delete(req, res, next) {
    fService.delete(req.params.id)
        .then(() => res.json({ message: 'Sup' }))
        .catch(next);
}


// UPLOAD
// handle storage using multer + formidable
const isFileValid = (file) => {
    const type = file.type.split("/").pop();
    const validTypes = ["jpg", "jpeg", "png", "pdf"];
    if (validTypes.indexOf(type) === -1) {
      return false;
    }
    return true;
  };

const form = formidable({ 
    multiples: true, 
    keepExtensions: true,
    maxFiles: 10,
    maxFields: 3, 
    allowEmptyFiles: false,
    uploadDir: './fichiers/fichiers/',
    filename: (name, ext, part, form) => `${name}${new Date().valueOf()}.${ext}`
});


 form.on('progress', (bytesReceived, bytesExpected) => {
    console.log("Progress: "+((bytesReceived*100)/bytesExpected));
  });
 
 // handle files upload
 router.post('/upload', authorize(), (req, res, next) => {

    form.parse(req, (err, fields, files) => {
        var i =0;
        if (!files.files) { 
            return res.status(400).send({ message: 'Please upload a file.' });
        }
        else {
            console.log(JSON.stringify({ fields, files }));
            if (Array.from(files.files).length > 1) {
            Array.from(files.files).forEach(files => {
            req.body.fiche = fields.fiche;
            req.body.analyse_matiere = fields.analyse_matiere;
            req.body.url = files.filepath;
            req.body.type = files.originalFilename.substr(files.originalFilename.lastIndexOf('.') + 1);
            fService.create(req.body);
            i++;
            });}
            else {
                req.body.analyse_matiere = fields.analyse_matiere;
                req.body.fiche = fields.fiche;
                req.body.url = files.files.filepath;
                req.body.type = files.files.originalFilename.substr(files.files.originalFilename.lastIndexOf('.') + 1);
                fService.create(req.body);
                i++;  
            }
        }

        return res.status(200).send({ message: i + ' Files Uploaded Successfully' });
    });
 });
 
