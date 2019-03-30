<template>
  <div class="notifications">
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
.notifications {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
