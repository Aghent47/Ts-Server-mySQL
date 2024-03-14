import { Router  } from 'express';
import { deleteUsuarios, putUsuario, getUsuario, getUsuarios, postUsuario } from '../controllers/usuarios';

const router = Router();

router.get('/', getUsuarios );

router.get('/:id', [] , getUsuario);

router.post('/', [], postUsuario);

router.put('/:id', [], putUsuario);

router.delete('/:id', [], deleteUsuarios);



export default router;