<script lang="ts">
    import CodeEditor from '$lib/components/CodeEditor.svelte'
    import { onMount } from 'svelte'
    export let data

    let problem = data.problem
    let innerWidth : number = 0

    let offset = 0

    $: leftWidth = innerWidth / 2 + offset
    $: rightWidth = innerWidth - leftWidth

    $: console.log(leftWidth)
    
    let value = "#include<stdio.h>\n\nint main(){ \n\n  return 0;\n}"

    //TODO: Add proper type
    let setValue : () => void;

    const handleSubmit = async () => {
        setValue()
        const res = await fetch("/api", {method: "POST", body: JSON.stringify(value)})
    }

    const startResize = (e : MouseEvent) => {
        console.log('resizing')
        let initial = e.clientX
        console.log(initial)
        document.onmousemove = (e) => {
            offset -= leftWidth - e.clientX 
        }
    }

    const abortResize = () => {
        document.onmousemove = null
    }

    const resetResize = () => {

        offset = 0
    }

</script>

<svelte:window on:mouseup={abortResize} bind:innerWidth/>

<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-start grow overflow-auto relative">

    <div class=" pl-5 pt-5 pr-3 pb-10 overflow-auto" style={`width : ${leftWidth}px`}>
        <h1 class="text-2xl font-bold"> Two Sum </h1>

        <br/>
        <p class="indent-8">
            Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
        </p>

        <br/>
        <div class="font-bold">Example 1:</div> 
        <span class="font-bold">Input: </span> nums = [2,7,11,15], target = 9 <br/>
        <span class="font-bold">Output: </span> [0,1] <br/>
        <span class="font-bold">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1] <br/>

        <br/>
        <div class="font-bold">Example 2:</div> 
        <span class="font-bold">Input: </span> nums = [2,7,11,15], target = 9 <br/>
        <span class="font-bold">Output: </span> [0,1] <br/>
        <span class="font-bold">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1] <br/>

    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="w-2 cursor-col-resize flex justify-center items-center bg-black/30" id="divider" on:mousedown={startResize}> 
        
       <button class="w-full" title="reset sizing" on:click={resetResize}> | </button>

    </div>

    <div class="flex flex-col" style={`width : ${rightWidth}px`}>
        <span class="flex items-end justify-between gap-3 px-3 w-full pt-1 pb-2 grow">
            <div class="self-center justify-self-center"> code.c </div>

            <div class="flex gap-3">
                <button class="btn" on:click={handleSubmit}> Run </button> 
                <button class="btn bg-primary text-white"> Submit </button>
            </div>

        </span>

        <CodeEditor bind:value bind:setValue bind:problem/>
    </div>

</div>

