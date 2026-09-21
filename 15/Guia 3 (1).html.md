<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hub Jurídico - Editor + IA + GitHub</title>
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#0f172a">
    <meta name="description" content="Editor de código jurídico com IA, GitHub e geração de APK">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<!-- ESTRUTURA BASE -->
<div class="container">
    <header id="header"></header>
    <main id="main">
        <aside id="sidebar"></aside>
        <div id="content"></div>
    </main>
</div>

<!-- MODALS -->
<div id="modalsContainer"></div>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- BIBLIOTECAS EXTERNAS -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/file-saver/2.0.5/FileSaver.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jschardet/2.0.1/jschardet.min.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- CONFIGURAÇÃO E BASE -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/config.js"></script>
<script src="js/base.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- COMPONENTES -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/components/header.js"></script>
<script src="js/components/sidebar.js"></script>
<script src="js/components/editor.js"></script>
<script src="js/components/pages.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- MÓDULOS PRINCIPAIS -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/modules/appState.js"></script>
<script src="js/modules/modalManager.js"></script>
<script src="js/modules/projectManager.js"></script>
<script src="js/modules/editorManager.js"></script>
<script src="js/modules/navigationManager.js"></script>
<script src="js/modules/importExport.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- MÓDULOS DE FUNCIONALIDADE -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/modules/projetos.js"></script>
<script src="js/modules/editor.js"></script>
<script src="js/modules/repositorio.js"></script>
<script src="js/modules/pwa.js"></script>
<script src="js/modules/sincronizacao.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- MÓDULOS DE VALIDAÇÃO E GERAÇÃO -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/modules/validador.js"></script>
<script src="js/modules/gerador-icones.js"></script>
<script src="js/modules/gerador-workflow.js"></script>
<script src="js/modules/gerador-eas.js"></script>
<script src="js/modules/gerador-desktop.js"></script>
<script src="js/modules/gerador-capacitor.js"></script>
<script src="js/modules/gerador-eas-workflow.js"></script>
<script src="js/modules/gerador-electron-workflow.js"></script>
<script src="js/modules/gerador.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- MÓDULOS DE IA E SCRIPTS -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/modules/ia.js"></script>
<script src="js/modules/gerador-batch.js"></script>
<script src="js/modules/parser-markdown.js"></script>
<script src="js/modules/gerador-html-completo.js"></script>
<script src="js/modules/gerador-html-interativo.js"></script>
<script src="js/modules/gerador-playground.js"></script>
<script src="js/modules/guia-interativo.js"></script>

<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!-- APP PRINCIPAL -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

<script src="js/app.js"></script>

</body>
</html>


// ═══════════════════════════════════════════════════════════════════════════
// MÓDULO: GUIA INTERATIVO - Orientação passo a passo
// ═══════════════════════════════════════════════════════════════════════════

const GuiaInterativo = {
    currentStep: 0,
    
    steps: [
        {
            title: '🎯 Bem-vindo ao Hub Jurídico!',
            description: 'Este é um ambiente completo para gerenciar seus projetos jurídicos com IA, editor de código e geração de aplicativos.',
            content: `
                <div style="text-align: center; padding: 40px 20px;">
                    <h2 style="color: #3b82f6; margin-bottom: 20px;">🚀 Hub Jurídico</h2>
                    <p style="color: #94a3b8; margin-bottom: 20px; font-size: 16px;">
                        Seu ambiente completo para projetos jurídicos
                    </p>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                        <p style="color: #e2e8f0; line-height: 1.8;">
                            ✅ Editor de código integrado<br>
                            ✅ IA para análise jurídica<br>
                            ✅ Sincronização com GitHub<br>
                            ✅ Geração de APK/PWA<br>
                            ✅ Gerenciamento de projetos
                        </p>
                    </div>
                </div>
            `,
            buttons: ['Próximo']
        },
        {
            title: '📁 Criando seu Primeiro Projeto',
            description: 'Vamos criar um novo projeto jurídico.',
            content: `
                <div style="padding: 20px;">
                    <h3 style="color: #3b82f6; margin-bottom: 16px;">📋 Passo 1: Novo Projeto</h3>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>1.</strong> Clique em "📁 Projetos" na barra lateral</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>2.</strong> Clique em "+ Novo Projeto"</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>3.</strong> Preencha os dados:</p>
                        <ul style="margin-left: 20px; color: #94a3b8;">
                            <li>📋 Nome do projeto</li>
                            <li>📝 Descrição</li>
                            <li>🔗 ID (com.app.meu_projeto)</li>
                            <li>📱 API Android (21-33)</li>
                            <li>🔄 Orientação (portrait/landscape)</li>
                        </ul>
                    </div>
                </div>
            `,
            buttons: ['Anterior', 'Próximo']
        },
        {
            title: '✏️ Editando Arquivos',
            description: 'Aprenda a editar arquivos do seu projeto.',
            content: `
                <div style="padding: 20px;">
                    <h3 style="color: #3b82f6; margin-bottom: 16px;">✏️ Editando Código</h3>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>1.</strong> Selecione um projeto</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>2.</strong> Clique em "✏️ Editor" na barra lateral</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>3.</strong> Escolha um arquivo para editar</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>4.</strong> Faça suas alterações</p>
                        <p style="color: #e2e8f0;"><strong>5.</strong> Clique em "💾 Salvar"</p>
                    </div>
                    <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; border-radius: 4px; padding: 12px;">
                        <p style="color: #22c55e;"><strong>💡 Dica:</strong> Você pode criar novos arquivos clicando em "+ Novo Arquivo"</p>
                    </div>
                </div>
            `,
            buttons: ['Anterior', 'Próximo']
        },
        {
            title: '🤖 Usando a IA',
            description: 'Aproveite a IA para análise e sugestões.',
            content: `
                <div style="padding: 20px;">
                    <h3 style="color: #3b82f6; margin-bottom: 16px;">🤖 IA Jurídica</h3>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>1.</strong> Clique em "🤖 IA" na barra lateral</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>2.</strong> Escolha uma função:</p>
                        <ul style="margin-left: 20px; color: #94a3b8;">
                            <li>📖 Analisar código jurídico</li>
                            <li>✅ Validar conformidade</li>
                            <li>💡 Sugerir melhorias</li>
                            <li>🔍 Revisar documentação</li>

// Adicione na lista de botões
{
    icon: '📖',
    label: 'Guia Interativo',
    module: 'guia',
    onclick: () => {
        NavigationManager.navigate('guia');
        GuiaInterativo.render();
    }
}

                        </ul>
                        <p style="color: #e2e8f0; margin-top: 12px;"><strong>3.</strong> Cole seu código ou texto</p>
                        <p style="color: #e2e8f0;"><strong>4.</strong> Clique em "Analisar"</p>
                    </div>
                </div>
            `,
            buttons: ['Anterior', 'Próximo']
        },
        {
            title: '🔧 Gerando Aplicativos',
            description: 'Gere APK, PWA e versões desktop.',
            content: `
                <div style="padding: 20px;">
                    <h3 style="color: #3b82f6; margin-bottom: 16px;">🔧 Gerador</h3>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>1.</strong> Clique em "🔧 Gerador" na barra lateral</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>2.</strong> Escolha o tipo de geração:</p>
                        <ul style="margin-left: 20px; color: #94a3b8;">
                            <li>📱 Capacitor (APK/iOS)</li>
                            <li>🍎 EAS (Expo)</li>
                            <li>🖥️ Electron (Desktop)</li>
                            <li>🌐 PWA (Web)</li>
                        </ul>
                        <p style="color: #e2e8f0; margin-top: 12px;"><strong>3.</strong> Clique em "Gerar"</p>
                        <p style="color: #e2e8f0;"><strong>4.</strong> Baixe os arquivos gerados</p>
                    </div>
                </div>
            `,
            buttons: ['Anterior', 'Próximo']
        },
        {
            title: '🌐 Sincronizando com GitHub',
            description: 'Envie seu projeto para o GitHub.',
            content: `
                <div style="padding: 20px;">
                    <h3 style="color: #3b82f6; margin-bottom: 16px;">🌐 GitHub</h3>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>1.</strong> Clique em "🌐 Repositório" na barra lateral</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>2.</strong> Conecte sua conta GitHub</p>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>3.</strong> Clique em "Sincronizar"</p>
                        <p style="color: #e2e8f0;"><strong>4.</strong> Seu projeto será enviado para o GitHub</p>
                    </div>
                    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid #3b82f6; border-radius: 4px; padding: 12px;">
                        <p style="color: #3b82f6;"><strong>💡 Dica:</strong> Você pode fazer backup automático do seu projeto</p>
                    </div>
                </div>
            `,
            buttons: ['Anterior', 'Próximo']
        },
        {
            title: '📖 Guias e Recursos',
            description: 'Acesse documentação e exemplos.',
            content: `
                <div style="padding: 20px;">
                    <h3 style="color: #3b82f6; margin-bottom: 16px;">📖 Recursos Disponíveis</h3>
                    <div style="background: #0f172a; border: 2px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>📚 Documentação:</strong></p>
                        <ul style="margin-left: 20px; color: #94a3b8; margin-bottom: 16px;">
                            <li>Guia de uso completo</li>
                            <li>Exemplos de projetos</li>
                            <li>FAQ e troubleshooting</li>
                        </ul>
                        <p style="color: #e2e8f0; margin-bottom: 12px;"><strong>🔗 Links Úteis:</strong></p>
                        <ul style="margin-left: 20px; color: #94a3b8;">
                            <li>Capacitor Docs</li>
                            <li>Expo Docs</li>
                            <li>Electron Docs</li>
                        </ul>
                    </div>
                </div>
            `,
            buttons: ['Anterior', 'Finalizar']
        }
    ],

    render() {
        const module = document.getElementById('guiaModule');
        if (!module) return;

        const step = this.steps[this.currentStep];

        module.innerHTML = `
            <div style="background: #1e293b; border: 2px solid #334155; border-radius: 8px; padding: 20px; min-height: 600px; display: flex; flex-direction: column;">
                
                <!-- PROGRESSO -->
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <h2 style="color: #3b82f6; font-size: 24px;">${step.title}</h2>
                        <span style="color: #94a3b8; font-size: 12px;">Passo ${this.currentStep + 1} de ${this.steps.length}</span>
                    </div>
                    
                    <!-- BARRA DE PROGRESSO -->
                    <div style="background: #0f172a; border: 1px solid #334155; border-radius: 4px; height: 8px; overflow: hidden;">
                        <div style="background: #3b82f6; height: 100%; width: ${((this.currentStep + 1) / this.steps.length) * 100}%; transition: width 0.3s;"></div>
                    </div>
                </div>

                <!-- CONTEÚDO -->
                <div style="flex: 1; margin-bottom: 20px; overflow-y: auto;">
                    ${step.content}
                </div>

                <!-- BOTÕES -->
                <div style="display: flex; gap: 12px; justify-content: flex-end;">
                    ${step.buttons.map((btn, idx) => {
                        if (btn === 'Anterior') {
                            return `<button class="btn btn-base" onclick="GuiaInterativo.previousStep()" style="background: #334155;">← ${btn}</button>`;
                        } else if (btn === 'Próximo') {
                            return `<button class="btn btn-base" onclick="GuiaInterativo.nextStep()">→ ${btn}</button>`;
                        } else if (btn === 'Finalizar') {
                            return `<button class="btn btn-base" onclick="GuiaInterativo.finish()" style="background: #22c55e;">✅ ${btn}</button>`;
                        }
                    }).join('')}
                </div>
            </div>
        `;
    },

    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.render();
        }
    },

    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.render();
        }
    },

    finish() {
        alert('✅ Parabéns! Você completou o guia interativo!\n\nAgora você está pronto para usar o Hub Jurídico!');
        this.currentStep = 0;
        NavigationManager.navigate('projetos');
    },

    reset() {
        this.currentStep = 0;
        this.render();
    }
};

// Renderizar quando o módulo for carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const guiaModule = document.getElementById('guiaModule');
        if (guiaModule) GuiaInterativo.render();
    });
} else {
    const guiaModule = document.getElementById('guiaModule');
    if (guiaModule) GuiaInterativo.render();
}
