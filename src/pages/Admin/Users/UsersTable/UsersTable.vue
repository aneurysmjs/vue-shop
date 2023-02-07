<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import Button from '@/components/base/BaseButton';
import Spinner from '@/components/base/Spinner';
import Table, { Thead, Tbody, Tr, Th, Td } from '@/components/base/Table';
import { useUsersStore } from '@/store/users/useUsersStore';

const router = useRouter();
const usersStore = useUsersStore();
const isLoading = ref(false);

onMounted(() => {
  usersStore.fetchUsers();
});

const users = computed(() => usersStore.getUsers);

const handleCreateUser = () => {
  router.push('/admin/users/new');
};
</script>

<template>
  <div>
    <nav v-if="!isLoading" :class="{ fadeIn: !isLoading }" class="animated">
      <Button @click="handleCreateUser"> Create User </Button>
    </nav>
    <div class="users-table__spinner">
      <Spinner v-if="isLoading" />
    </div>
    <div v-if="!isLoading" :class="{ fadeIn: !isLoading }" class="animated">
      <Table>
        <Thead slot="thead">
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody slot="tbody">
          <Tr v-for="user in users" :key="user.id">
            <Th>{{ user.firstName }}</Th>
            <Td>{{ user.lastName }}</Td>
            <Td>{{ user.email }}</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  </div>
</template>

<style>
.users-table {
  @apply text-center;
}
</style>
