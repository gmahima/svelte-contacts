<script>
  import { Link } from "svelte-routing";
  export let to="";
  export let className="";

  function getProps ({href, isCurrent, isPartiallyCurrent}) {
      const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
      let styles = {
        class: className+ "  py-1  font-bold "
      }

      if(isActive) {
        styles.class = styles.class.concat(" text-gray-700")
          return styles;

      }
      styles.class = styles.class.concat("text-gray-500 hover:text-gray-600 ")
      return styles;
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot></slot>
</Link>