import { create } from "zustand";

const Store = create((set) => ({
    bettingAmount : 0,
    amount : 1000,
    multiply : (input,value) => set((prev) => ({amount :input*value + (prev.amount - input)})),
    deposit : () => set((prev) => {
        if (prev.amount < 10000) {
            return {amount : prev.amount + 1000}
        } else return prev;
    }),
    withdrawl : () => set((prev) => {
        if (prev.amount > 0 ) {
            return {amount : prev.amount - 1000}
        } else return prev;
    }),
    changeBettingAmount : (input) => set((prev) => ({
        bettingAmount : Number(input)
    }))
}))

export default Store