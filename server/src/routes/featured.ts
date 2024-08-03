import { Router } from 'express';
import { getFeaturedProducts, markAsFeatured, removeFromFeatured } from '../controllers/featured';

const router = Router();

router.get('/', getFeaturedProducts);
router.post('/', markAsFeatured);
router.delete('/:id', removeFromFeatured);

export default router;

