<script lang="ts">
    import loader from '@monaco-editor/loader';
    import { onDestroy, onMount } from 'svelte';
    import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

    export let value : string = "#include<stdio.h>\n\nint main(){ \n\n  return 0;\n}"
    export const setValue = () => {value = editor.getValue()} //this function allows us to update the value prop with a function
    
    let editor: Monaco.editor.IStandaloneCodeEditor;
    let monaco: typeof Monaco;
    let editorContainer: HTMLElement;

    let mounted = false

    onMount(async () => {
        // Remove the next two lines to load the monaco editor from a CDN
        // see https://www.npmjs.com/package/@monaco-editor/loader#config
        const monacoEditor = await import('monaco-editor');
        loader.config({ monaco: monacoEditor.default });

        monaco = await loader.init();

        // Your monaco instance is ready, let's display some code!
        editor = monaco.editor.create(editorContainer, {
            value: value,
            language: "c", 
            automaticLayout: true
        });

        mounted = true
    });



</script>


<div class="grow shadow-inner border-t-2 overflow-hidden">
    <div class="w-full h-full" bind:this={editorContainer} />
</div>