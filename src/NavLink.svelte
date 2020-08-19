<script>
  import { Link } from "svelte-routing";
  export let to="";
  function getProps ({href, isCurrent, isPartiallyCurrent}) {
      const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
      let styles = {
        class: "  py-1  mr-4  "
      }

      if(isActive) {
        styles.class = styles.class.concat("font-bold text-gray-700")
          return styles;

      }
      styles.class = styles.class.concat("text-gray-500 hover:text-gray-600 hover:font-semibold")
      return styles;
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot></slot>
</Link>