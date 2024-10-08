import { Router } from 'express'
import { getStationeries, getStationeryById } from '../controllers/stationery'

const router = Router()

router.get('/', getStationeries)
router.get('/:id', getStationeryById)

export default router
