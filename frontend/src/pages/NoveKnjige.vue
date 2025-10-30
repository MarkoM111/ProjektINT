<template>
  <q-page padding>
    <div class="q-pa-md">
  <q-card>
    <q-card-section>
      <div class="text-h6">Nove knjige</div>
      <div class="text-subtitle2">Pregled najnovijih naslova</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>The Road</q-item-label>
            <q-item-label caption>Cormac McCarthy • 2006</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat round icon="chevron_right" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</div>
  </q-page>
</template>

<script setup>

</script>
