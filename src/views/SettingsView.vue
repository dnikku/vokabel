<template>
  <div class="about">
    <h3>TODO: Settings</h3>

    <div>
      <checkbox v-model="showResolution"
                label="Show Resolution"
                id="toggleShowResolution"
      />
      &nbsp; &nbsp;
      <span v-show="showResolution">{{ states.resolution }}</span>
    </div>

  </div>
</template>


<script lang="ts">
import Checkbox from "@/components/Checkbox.vue"
import {useSettingsStore} from "@/stores/settings"

export default {
  components: {
    Checkbox
  },

  setup() {
    const settings = useSettingsStore()

    return {
      states : settings.states,
      toggleShowResolution: settings.toggleShowResolution
    }
  },

  computed: {
    showResolution: {
      get() : boolean {
        return this.states.resolution != null
      },
      set(newVal: boolean) {
        this.toggleShowResolution()
      }
    }

  }
}
</script>