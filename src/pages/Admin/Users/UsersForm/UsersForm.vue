<script setup lang="ts">
import { reactive, computed } from 'vue';
import Spinner from '@/components/base/Spinner';
import Select from '@/components/base/Select';
import Button from '@/components/base/BaseButton';

const user = reactive({
  firstName: '',
  lastName: '',
  email: '',
});

const isLoading = computed(() => 0);
const error = computed(() => '');

const handleSubmit = () => {
  // createUser(user);
};
const handleChange = (evt) => {
  const { target } = evt;
  const { name, value } = target;
  const userData = {
    ...user,
    [name]: value,
  };
};
const handleSelect = (shop) => {};
</script>

<template>
  <form class="users-form" @submit.prevent="handleSubmit">
    <div>
      <div class="form-group">
        <input
          :value="user.firstName"
          type="text"
          name="firstName"
          class="form-control"
          placeholder="First name"
          @change="handleChange"
        />
      </div>
      <div class="form-group">
        <input
          :value="user.lastName"
          type="text"
          name="lastName"
          class="form-control"
          placeholder="Last name"
          @change="handleChange"
        />
      </div>
      <div class="form-group">
        <input
          :value="user.email"
          type="email"
          name="email"
          class="form-control"
          placeholder="Email"
          @change="handleChange"
        />
      </div>
      <div class="form-group">
        <Select :items="[{ id: 0, text: 'Item' }]" @on-select="handleSelect" />
      </div>
      <Button type="submit" @click="handleSubmit"> Create User </Button>
      <div class="users-table__spinner">
        <Spinner v-if="isLoading" />
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.users-form {
  max-width: 30rem;
}
</style>
