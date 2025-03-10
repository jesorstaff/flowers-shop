import { ref, watch } from 'vue'

const useCart = () => {
    const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

    const addToCard = (event, element) => {
        event.preventDefault()

        const exists = cart.value.some((item) => item.id === element.id)

        if (!exists) {
            cart.value.push(element)
            localStorage.setItem('cart', JSON.stringify(cart.value))
        }
    }

    const removeToCard = (event, element) => {
        event.preventDefault()
        cart.value = cart.value.filter((item) => item.id !== element.id)
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const isInCart = (element) => {
        return cart.value.some((item) => item.id === element.id)
    }

    watch(cart, (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart))
    })

    return {
        cart,
        addToCard,
        removeToCard,
        isInCart,
    }
}

export default useCart
