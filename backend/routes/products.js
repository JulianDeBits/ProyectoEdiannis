import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        let filter = {};
        if (category) {
            filter.category = category;
        }
        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
});

router.post('/seed', async (req, res) => {
    
    const sampleProducts = [
        { name: 'Camiseta blanca', price: 70000, category: 'hombre' },
        { name: 'Camiseta negra', price: 80000, category: 'mujer' },
        { name: 'Camiseta oversize', price: 90000, category: 'unisex' },
    ];
    await Product.insertMany(sampleProducts);
    res.send('Productos iniciales creados.');
})

export default router;