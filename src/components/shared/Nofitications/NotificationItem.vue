<template>
  <div
    :class="notificationType"
    role="alert"
    class="notificationItem"
  >
    {{ notification.message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('notifications');

interface INofiticationItem {
  timeout: number | null;
  isEntry: boolean;
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
      isEntry: false,
    };
  },
  computed: {
    notificationType(): string {
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
    border-radius: px-to-rem(2);
    color: var(--white);
    margin: 1em 0 1em;
    padding: 0.5rem;

    @include modifier(success) {
      background: var(--green);
    }

    @include modifier(error) {
      background: var(--red);
    }
  }
</style>
