<script>
  export let href = "#";
  export let target = "_self";
</script>

<a {href} {target}>
  <slot>Button Text</slot>
</a>

<style lang="postcss">
  a {
    @apply py-3
        px-5
        bg-yellow-200
        text-black
        rounded-md
        relative
        overflow-hidden;
  }

  a::before {
    content: "";

    @apply bg-white
        bg-opacity-25
        w-3/5
        h-full
        top-0
        left-[-125%]
        absolute
        pointer-events-none;

    transform: skew(45deg);
    transition: left 500ms ease-out;
  }

  a:hover::before {
    @apply left-[125%];
  }
</style>

