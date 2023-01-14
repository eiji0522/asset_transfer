const Product = require('./model/product')
const Billing = require('./model/billing')
const Debt = require('./model/debt')

class FakeDb {

    constructor() {
        this.products = [
            {
                material: 'M000000001',
                description: 'device A',
                unit_price: 10000,
                quantity: 100,
                lot: 'L0001',
                carbon: 258
            },
            {
                material: 'M000000002',
                description: 'device B',
                unit_price: 5000,
                quantity: 250,
                lot: 'L0002',
                carbon: 425
            },
            {
                material: 'M000000003',
                description: 'device C',
                unit_price: 18750,
                quantity: 175,
                lot: 'L0003',
                carbon: 103
            },
            {
                material: 'M000000004',
                description: 'device D',
                unit_price: 30000,
                quantity: 50,
                lot: 'L0004',
                carbon: 525     
            },
            {
                material: 'M000000005',
                description: 'device E',
                unit_price: 1234567890,
                quantity: 12345,
                lot: 'L0005',
                carbon: 999     
            }
        ]

        this.billings = [
            {
                invoice_number: 'B000000001',
                description: '1月請求書',
                invoice_date: 20230101,
                amount: 1500000,
                due_date: 20230125,
                product: 'M000000001'
            },
            {
                invoice_number: 'B000000002',
                description: '2月請求書',
                invoice_date: 20230201,
                amount: 1000000,
                due_date: 20230225,
                product: 'M000000002'
            },
            {
                invoice_number: 'B000000003',
                description: '3月請求書',
                invoice_date: 20230301,
                amount: 2250000,
                due_date: 20230325,
                product: 'M000000003'
            }
        ]

        this.debts = [
            {
                invoice_number: 'B000000001',
                description: '1月請求書',
                invoice_date: 20230101,
                amount: 1500000,
                due_date: 20230125,
                product: 'M000000001'
            },
            {
                invoice_number: 'B000000002',
                description: '2月請求書',
                invoice_date: 20230201,
                amount: 1000000,
                due_date: 20230225,
                product: 'M000000002'
            },
            {
                invoice_number: 'B000000003',
                description: '3月請求書',
                invoice_date: 20230301,
                amount: 2250000,
                due_date: 20230325,
                product: 'M000000003'
            }
        ]
    }

    async initDb() {
        await this.cleanDb ()
        this.pushProductsToDb ()
        this.pushBillingsToDb ()
        this.pushDebtsToDb ()

    }

    async cleanDb() {
        await Product.deleteMany({})
        await Billing.deleteMany({})
        await Debt.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    pushBillingsToDb(){
        this.billings.forEach(
            (billing) => {
                const newBilling = new Billing(billing)
                newBilling.save()
            }
        )
    }

    pushDebtsToDb(){
        this.debts.forEach(
            (debt) => {
                const newDebt = new Debt(debt)
                newDebt.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
        this.pushBillingsToDb()
        this.pushDebtsToDb()       
    }
}

module.exports = FakeDb