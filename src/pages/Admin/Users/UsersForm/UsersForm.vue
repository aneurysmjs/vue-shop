<template>
  <form
    @submit.prevent="handleSubmit"
    class="users-form"
  >
    <div>
      <div class="form-group">
        <input
          :value="user.firstName"
          @change="handleChange"
          type="text"
          name="firstName"
          class="form-control"
          placeholder="First name"
        >
      </div>
      <div class="form-group">
        <input
          :value="user.lastName"
          @change="handleChange"
          type="text"
          name="lastName"
          class="form-control"
          placeholder="Last name"
        >
      </div>
      <div class="form-group">
        <input
          :value="user.email"
          @change="handleChange"
          type="email"
          name="email"
          class="form-control"
          placeholder="Email"
        >
      </div>
      <div class="form-group">
        <Select
          :items="[{ id: 0, text: 'Item' }]"
          @on-select="handleSelect"
        />
      </div>
      <Button
        @click="handleSubmit"
        type="submit"
      >
        Create User
      </Button>
      <div class="users-table__spinner">
        <Spinner
          v-if="isLoading"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import isNil from 'lodash.isnil';

import { createNamespacedHelpers } from 'vuex';

import { IUser } from '@/store/modules/users/users.type';

import Button from 'components/base/Button';
import Spinner from 'components/base/Spinner';
import Select from 'components/base/Select';

const { mapState, mapActions } = createNamespacedHelpers('users');

interface IUsersFormData {
  user: IUser;
}

export default Vue.extend({
  name: 'UsersForm',
  components: {
    Button,
    Spinner,
    Select,
  },
  data(): IUsersFormData {
    return {
      user: {
        firstName: '',
        lastName: '',
        shop: '',
      },
    };
  },
  computed: {
    ...mapState(['isLoading', 'error']),
  },
  methods: {
    handleSubmit(): void {
      this.createUser(this.user);
      this.user = {
        firstName: '',
        lastName: '',
        shop: '',
      };
    },
    handleChange($event: Event): void {
      const { target } = $event;
      // @ts-ignore
      const { name, value } = target;
      if (!isNil(value)) {
        this.user = {
          ...this.user,
          [name]: value,
        };
      }
    },
    // eslint-disable-next-line
    handleSelect(shop: { name: string }): void {},
    ...mapActions(['createUser']),
  },
});
</script>

<style lang="scss">
  .users-form {
    max-width: 30rem;
  }
</style>
