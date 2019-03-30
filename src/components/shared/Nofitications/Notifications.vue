<template>
  <div
    :class="[notifications.length ? 'fadeInRight' : 'fadeInLeft']"
    class="notifications animated"
  >
    <NotificationItem
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

import NotificationItem from './NotificationItem.vue';

const { mapState } = createNamespacedHelpers('notifications');

export default Vue.extend({
  name: 'Notifications',
  components: {
    NotificationItem,
  },
  computed: mapState(['notifications']),
});
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .notifications {
    padding-right: px-to-rem(40);
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
