<script lang="ts">
    import CodeEditor from '$lib/components/CodeEditor.svelte'
    export let data

    let problem = data.problem
    
    $: value = "#include<stdio.h>\n\nint main(){ \n\n  return 0;\n}"

    //TODO: Add proper type
    let setValue : () => void;

    const handleSubmit = async () => {
        setValue()
        const res = await fetch("/api", {method: "POST", body: JSON.stringify(value)})
    }

</script>


<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-center grow overflow-auto">

    <div class="w-3/6 pl-5 pt-5 pr-3 pb-10 overflow-auto">
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

    <div class="w-1 bg-black/30"></div>

    <div class="flex flex-col w-3/6">
        <span class="flex items-end justify-between gap-3 px-3 w-full pt-1 pb-2">
            <div class="self-center justify-self-center"> code.c </div>

            <div class="flex gap-3">
                <button class="btn" on:click={handleSubmit}> Run </button> 
                <button class="btn bg-primary text-white"> Submit </button>
            </div>

        </span>

        <CodeEditor bind:value bind:setValue bind:problem/>
    </div>

</div>

