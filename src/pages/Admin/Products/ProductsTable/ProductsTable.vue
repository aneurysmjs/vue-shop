<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

import Button from '@/components/base/BaseButton';
import Table, { Thead, Tbody, Tr, Th, Td } from '@/components/base/Table';
import { useProductsStore } from '@/store/products/useProductsStore';

const router = useRouter();

const productStore = useProductsStore();

onMounted(() => {
  productStore.fetchProducts();
});

const products = computed(() => productStore.getProducts);

const handleCreateProduct = () => {
  router.push('/admin/products/new');
};
</script>

<template>
  <div>
    <nav>
      <Button @click="handleCreateProduct"> Create Product </Button>
    </nav>
    <Table>
      <Thead slot="thead">
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Stock</Th>
          <Th>Shop</Th>
        </Tr>
      </Thead>
      <Tbody slot="tbody">
        <Tr v-for="product in products" :key="product.name">
          <Th>{{ product.name }}</Th>
          <Td>{{ product.price }}</Td>
          <Td>{{ product.stock }}</Td>
          <Td>{{ product.shop }}</Td>
        </Tr>
      </Tbody>
    </Table>
  </div>
</template>

<style></style>
