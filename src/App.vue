<template>
    <div id="app">
        <router-view />
        <portal-target name="modal" />
    </div>
</template>

<script>
import '~icons';

export default {
    name: 'App'
};
</script>
