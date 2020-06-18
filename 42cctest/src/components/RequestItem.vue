<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
{{request.info}}
            </div>
            <div class="col-8">
{{request.date_add}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RequestItem',
    props:{
        request:{
            type:Object,
            required:true,
        }
    },

}
</script>

