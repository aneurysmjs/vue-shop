<template>
  <div
    :class="notificationTypeClass"
    class="notificationItem"
  >
    <p>
      {{ notification.message }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('notifications');

interface INofiticationItem {
  timeout: number | null;
}

export default Vue.extend({
  name: 'NotificationItem',
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data(): INofiticationItem {
    return {
      timeout: null,
    };
  },
  computed: {
    notificationTypeClass(): string {
      const { type } = this.notification;
      return `notificationItem--${type}`;
    },
  },
  mounted(): void {
    this.timeout = setTimeout(() => (
      this.deleteNotification(this.notification)
    ), 2000);
  },
  beforeDestroy(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },
  methods: mapActions(['deleteNotification']),
});
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .notificationItem {
    margin: 1em 0 1em;

    @include modifier(type) {

    }
  }
</style>
