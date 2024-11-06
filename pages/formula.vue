<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
    <div class="text-center">
      <h2 class="text-2xl font-semibold mb-4">Розрахунок спіральної антени</h2>

      <div class="mb-4">
        <label for="frequency" class="block text-sm font-medium text-gray-700">Частота</label>
        <div class="flex items-center space-x-4">
          <input
              v-model="frequencyValue"
              id="frequency"
              type="number"
              step="0.01"
              class="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Введіть частоту"
          />
          <select
              v-model="frequencyUnit"
              id="frequencyUnit"
              class="mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="Hz">Гц</option>
            <option value="kHz">кГц</option>
            <option value="MHz">МГц</option>
            <option value="GHz">ГГц</option>
          </select>
        </div>
      </div>

      <div class="mb-4">
        <label for="diameter" class="block text-sm font-medium text-gray-700">Діаметр спіралі (см)</label>
        <input v-model="diameter" id="diameter" type="number" step="0.1" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Введіть діаметр спіралі" />
      </div>

      <div class="mb-4">
        <label for="pitch" class="block text-sm font-medium text-gray-700">Крок (см)</label>
        <input v-model="pitch" id="pitch" type="number" step="0.1" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Введіть крок" />
      </div>

      <div class="mt-6">
        <h3 class="text-xl font-semibold mb-2">Розрахунки:</h3>
        <div class="prose prose-sm mx-auto">
          <p>
            Формула для розрахунку довжини хвилі:
          </p>
          <p v-html="lambdaFormula"></p>

          <p>
            Формула для розрахунку довжини одного витка спіралі:
          </p>
          <p v-html="lFormula"></p>

          <p>
            Формула для розрахунку кількості витків:
          </p>
          <p v-html="nFormula"></p>
        </div>
      </div>

      <div class="mt-6 text-center">
        <h3 class="text-xl font-semibold mb-2">Підставлені значення:</h3>
        <p>Частота: {{ frequency }} {{ frequencyUnit }}</p>
        <p>Діаметр спіралі: {{ diameter }} см</p>
        <p>Крок: {{ pitch }} см</p>
        <p v-if="calculatedLambda && calculatedL && calculatedN">
          Довжина хвилі (λ): {{ calculatedLambda }} см
        </p>
        <p v-if="calculatedL">
          Довжина одного витка (L): {{ calculatedL }} см
        </p>
        <p v-if="calculatedN">
          Кількість витків (N): {{ calculatedN }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default {
  data() {
    return {
      frequencyValue: 500,  // Значення частоти за замовчуванням (1 кГц)
      frequencyUnit: 'MHz',  // Одиниця вимірювання частоти за замовчуванням
      diameter: 5,  // Діаметр спіралі за замовчуванням
      pitch: 5,  // Крок спіралі за замовчуванням
      calculatedLambda: null,
      calculatedL: null,
      calculatedN: null,
      lambdaFormula: '',
      lFormula: '',
      nFormula: ''
    };
  },
  created() {
    // Викликаємо метод для обчислень після ініціалізації компоненту
    this.calculateValues();
  },
  watch: {
    frequencyValue() {
      this.calculateValues();
    },
    diameter() {
      this.calculateValues();
    },
    pitch() {
      this.calculateValues();
    },
    frequencyUnit() {
      this.calculateValues();
    }
  },
  methods: {
    calculateValues() {
      if (this.frequencyValue > 0 && this.diameter > 0 && this.pitch > 0) {
        const speedOfLight = 3e8; // м/с
        let frequencyInHz = this.frequencyValue;

        // Перетворення частоти в Гц залежно від одиниці
        switch (this.frequencyUnit) {
          case 'kHz':
            frequencyInHz *= 1e3;
            break;
          case 'MHz':
            frequencyInHz *= 1e6;
            break;
          case 'GHz':
            frequencyInHz *= 1e9;
            break;
        }

        const lambda = (speedOfLight / frequencyInHz) * 100; // у сантиметрах
        const L = Math.sqrt(Math.PI * Math.pow(this.diameter / 100, 2) + Math.pow(this.pitch / 100, 2)) * 100; // у сантиметрах
        const N = lambda / L;

        this.calculatedLambda = lambda.toFixed(2);
        this.calculatedL = L.toFixed(2);
        this.calculatedN = N.toFixed(2);

        // Оновлюємо формули для рендеру
        this.lambdaFormula = katex.renderToString(`\\lambda = \\frac{c}{f}`);
        this.lFormula = katex.renderToString(`L = \\sqrt{\\pi D^2 + S^2}`);
        this.nFormula = katex.renderToString(`N = \\frac{\\lambda}{L}`);
      }
    }
  }
};
</script>

<style scoped>
.math {
  font-size: 1.25rem;
  text-align: center;
  margin: 0.5rem 0;
}
</style>
