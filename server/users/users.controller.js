﻿const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('./../middleware/validate-request');
const authorize = require('./../middleware/authorize')
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticateSchema, authenticate);
router.post('/register', registerSchema, register);
router.post('/updateMdp/', updateMdp);
router.get('/email', getUserByEmail);
router.get('/', authorize(), getAll);
router.get('/current', authorize(), getCurrent);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        motdepasse: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        nom: Joi.string().required(),
        prenom: Joi.string().required(),
        email: Joi.string().email().required(),
        departement: Joi.string().required(),
        role: Joi.string().required(),
        motdepasse: Joi.string().min(6).required()
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'Succes' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getUserByEmail(req, res, next) {
    userService.getUserByEmail(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.user);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        nom: Joi.string().empty(''),
        prenom: Joi.string().empty(''),
        email: Joi.string().empty(''),
        departement: Joi.string().empty(''),
        role: Joi.string().empty(''),
        motdepasse: Joi.string().min(6).empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

function updateMdp(req, res, next) {
    userService.updateMdp(req.body)
        .then(() => res.json({ message: 'Succes' }))
        .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'Sup' }))
        .catch(next);
}