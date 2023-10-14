import {Request, Response} from 'express';
import Usuario from '../models/usuario';
import { where } from 'sequelize';

export const getUsuarios = async ( req: Request, res: Response) => {
    
    const usuarios = await Usuario.findAll();
    
    res.json({
        usuarios
    });
    
}

export const getUsuario = async ( req: Request, res: Response) => {
    const { id } = req.params;
    
    const usuario = await Usuario.findByPk(id);
    
    res.json({
        usuario
    })
    
}

export const postUsuario = async ( req: Request, res: Response) => {

    const { body } = req;
    try {
    
        const usuarioExiste = await Usuario.findOne({
             where: { email: body.email 
            } });

            const usuario = await Usuario.build(body)
            usuario.save()
        res.json(
           usuario
            );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
        }

export const putUsuario = ( req: Request, res: Response) => {

            const { id } = req.params;
            const { body } = req;
        
            res.json({ 
                msg: 'putUsuario',
                body,
                id
                 
                })
                }

export const deleteUsuario = ( req: Request, res: Response) => {

                    const { id } = req.params;
                
                    res.json({ 
                        msg: 'deleteUsuario',
                        id
                         
                        })
                        }