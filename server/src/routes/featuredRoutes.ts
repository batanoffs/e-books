import { Router } from 'express';
import { getFeaturedProducts, markAsFeatured, removeFromFeatured } from '../controllers/featuredController';

const router = Router();

router.get('/', getFeaturedProducts);
router.post('/', markAsFeatured);
router.delete('/:id', removeFromFeatured);

export default router;

