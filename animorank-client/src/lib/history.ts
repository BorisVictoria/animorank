import { writable } from 'svelte/store'
import { browser } from '$app/environment'




export const updateHistory = (problem : string, newVal : string) => {
    if(browser){
        const history = JSON.parse(localStorage.getItem(problem) || '[]')
        history.push(newVal)
        localStorage.setItem(problem, JSON.stringify(history))
    }
}
