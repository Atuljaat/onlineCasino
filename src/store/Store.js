import { create } from "zustand";

const Store = create((set) => ({
    amount : 1000,
    multiply : (input) => set((prev) => ({amount : prev.amount * input})),
    deposit : () => set((prev) => {
        if (prev.amount < 10000) {
            return {amount : prev.amount + 1000}
        } else return prev;
    }),
    withdrawl : () => set((prev) => {
        if (prev.amount > 0 ) {
            return {amount : prev.amount - 1000}
        } else return prev;
    })
}))

export default Store