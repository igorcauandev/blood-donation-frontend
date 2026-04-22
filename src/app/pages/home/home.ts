import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Paciente {
  data: string;
  nome: string;
}

interface ItemEstoque {
  tipo: string;
  quantidade: number;
  ml: number;
}

interface Atividade {
  id: number;
  data: string;
  descricao: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <header class="dashboard__topbar">
        <span>Página Principal</span>
      </header>

      <main class="dashboard__content">
        <h1 class="dashboard__title">Home Page</h1>

        <div class="dashboard__top-row">

          <div class="card">
            <h2 class="card__title">Tipos Disponíveis</h2>
            <div class="blood-grid">
              <span class="blood-badge">A+</span>
              <span class="blood-badge">B+</span>
              <span class="blood-badge">AB+</span>
              <span class="blood-badge">A-</span>
              <span class="blood-badge blood-badge--empty">O-</span>
              <span class="blood-badge">AB-</span>
              <span class="blood-badge">B-</span>
              <span class="blood-badge">O+</span>
            </div>
          </div>

          <div class="card">
            <h2 class="card__title">Últimos Pacientes</h2>
            <ul class="patient-list">
              @for (paciente of ultimosPacientes; track paciente.nome) {
                <li class="patient-item">
                  <span class="patient-item__date">{{ paciente.data }}</span>
                  <span class="patient-item__name">{{ paciente.nome }}</span>
                </li>
              }
            </ul>
          </div>

          <div class="card">
            <h2 class="card__title">Estoque</h2>
            <ul class="stock-list">
              @for (item of estoque; track item.tipo) {
                <li class="stock-item">
                  <span class="stock-badge" [class.stock-badge--empty]="item.quantidade === 0">
                    {{ item.tipo }}
                  </span>
                  <span class="stock-desc">{{ item.quantidade }} Bolsas de {{ item.tipo }} / {{ item.ml }}ml</span>
                </li>
              }
            </ul>
          </div>

        </div>

        <div class="card">
          <h2 class="card__title">Últimas Atividades:</h2>
          <ul class="activity-list">
            @for (atividade of ultimasAtividades; track atividade.id) {
              <li class="activity-item">
                <span class="activity-item__date">{{ atividade.data }}</span>
                <span class="activity-item__text">{{ atividade.descricao }}</span>
              </li>
            }
          </ul>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard { margin-left: 60px; min-height: 100vh; background-color: #f4f4f4; }
    .dashboard__topbar { height: 48px; background: white; border-bottom: 1px solid #e8e8e8; display: flex; align-items: center; padding: 0 24px; font-size: 0.875rem; color: #666; }
    .dashboard__content { padding: 20px 24px; display: flex; flex-direction: column; gap: 16px; }
    .dashboard__title { font-size: 1.2rem; font-weight: 500; color: #222; }
    .dashboard__top-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .card { background: white; border: 1px solid #e8e8e8; border-radius: 10px; padding: 14px; }
    .card__title { font-size: 0.8rem; font-weight: 500; color: #888; margin-bottom: 12px; }
    .blood-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
    .blood-badge { background: #fbeaea; border: 1px solid #f0a0a0; border-radius: 6px; padding: 5px 0; text-align: center; font-size: 0.8rem; font-weight: 500; color: #771415; }
    .blood-badge--empty { background: #f0f0f0; border-color: #d0d0d0; color: #666; }
    .patient-list, .stock-list, .activity-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .patient-item, .stock-item, .activity-item { display: flex; align-items: center; gap: 10px; }
    .patient-item__date, .activity-item__date { font-size: 0.75rem; color: #999; min-width: 70px; }
    .patient-item__name, .activity-item__text { font-size: 0.8rem; color: #333; }
    .stock-badge { background: #fbeaea; border: 1px solid #f0a0a0; border-radius: 6px; padding: 4px 10px; font-size: 0.8rem; font-weight: 500; color: #771415; min-width: 38px; text-align: center; }
    .stock-badge--empty { background: #f0f0f0; border-color: #d0d0d0; color: #666; }
    .stock-desc { font-size: 0.8rem; color: #444; }
    .activity-item { background: #f7f7f7; border-radius: 6px; padding: 8px 12px; }
  `]
})
export class HomeComponent {
  ultimosPacientes: Paciente[] = [
    { data: '13/01/2024', nome: 'Igor Cauan' },
    { data: '13/01/2024', nome: 'Diego Luiz Krauss' },
    { data: '13/01/2024', nome: 'Kaiman Aquino de Souza' }
  ];

  estoque: ItemEstoque[] = [
    { tipo: 'A+', quantidade: 5, ml: 1040 },
    { tipo: 'O-', quantidade: 0, ml: 0 }
  ];

  ultimasAtividades: Atividade[] = [
    { id: 1, data: '13/01/2024', descricao: 'Foi reposto 5 unidades de bolsas de sangue do tipo A+' },
    { id: 2, data: '13/01/2024', descricao: 'Igor Cauan' },
    { id: 3, data: '13/01/2024', descricao: 'Igor Cauan' },
    { id: 4, data: '13/01/2024', descricao: 'Igor Cauan' },
    { id: 5, data: '13/01/2024', descricao: 'Igor Cauan' }
  ];
}