// cloudvBOX Dark Theme - JavaScript customizations
// Adiciona funcionalidades extras ao tema

(function() {
    'use strict';
    
    // Aguardar o carregamento completo da página
    function waitForElement(selector, callback) {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else {
            setTimeout(() => waitForElement(selector, callback), 100);
        }
    }
    
    // Adicionar logo cloudvBOX ao header se não existir
    function addCloudvBoxLogo() {
        const header = document.querySelector('#header, #jp-top-panel');
        if (header && !header.querySelector('.cloudvbox-logo-js')) {
            const logo = document.createElement('img');
            logo.src = '/images/logo-branco.png';
            logo.alt = 'cloudvBOX';
            logo.className = 'cloudvbox-logo cloudvbox-logo-js';
            logo.style.cssText = `
                height: 32px;
                width: auto;
                margin-right: 1rem;
                vertical-align: middle;
                filter: brightness(1.1);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
            `;
            
            // Adicionar efeito hover
            logo.addEventListener('mouseenter', function() {
                this.style.filter = 'brightness(1.2) drop-shadow(0 0 8px rgba(var(--cloudvbox-primary-rgb, 63, 209, 185), 0.3))';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.filter = 'brightness(1.1)';
            });
            
            // Adicionar link para o site cloudvBOX
            logo.addEventListener('click', function() {
                window.open('https://cloudvbox.com', '_blank');
            });
            
            header.insertBefore(logo, header.firstChild);
        }
    }
    
    // Adicionar indicador de tema ativo
    function addThemeIndicator() {
        if (document.querySelector('.cloudvbox-theme-indicator')) return;
        
        const indicator = document.createElement('div');
        indicator.className = 'cloudvbox-theme-indicator';
        indicator.innerHTML = '🌙 cloudvBOX Dark';
        indicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--cloudvbox-bg-card, #1f2937);
            color: var(--cloudvbox-primary, #3FD1B9);
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--cloudvbox-border-primary, #374151);
            z-index: 9999;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease-in-out;
            pointer-events: none;
        `;
        
        document.body.appendChild(indicator);
        
        // Animar entrada
        setTimeout(() => {
            indicator.style.opacity = '1';
            indicator.style.transform = 'translateY(0)';
        }, 500);
        
        // Remover após 3 segundos
        setTimeout(() => {
            indicator.style.opacity = '0';
            indicator.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (indicator.parentNode) {
                    indicator.parentNode.removeChild(indicator);
                }
            }, 300);
        }, 3000);
    }
    
    // Melhorar contraste de texto em elementos específicos
    function improveTextContrast() {
        const style = document.createElement('style');
        style.textContent = `
            /* Melhorar legibilidade de texto */
            .text_cell_render p,
            .jp-MarkdownOutput p {
                color: var(--cloudvbox-text-primary, #ffffff) !important;
                line-height: 1.6 !important;
            }
            
            /* Destacar links */
            .text_cell_render a,
            .jp-MarkdownOutput a {
                color: var(--cloudvbox-primary, #3FD1B9) !important;
                text-decoration: none !important;
                border-bottom: 1px solid transparent !important;
                transition: all 0.2s ease-in-out !important;
            }
            
            .text_cell_render a:hover,
            .jp-MarkdownOutput a:hover {
                border-bottom-color: var(--cloudvbox-primary, #3FD1B9) !important;
                text-shadow: 0 0 8px rgba(var(--cloudvbox-primary-rgb, 63, 209, 185), 0.3) !important;
            }
            
            /* Melhorar tabelas */
            .text_cell_render table,
            .jp-MarkdownOutput table {
                border-collapse: collapse !important;
                border: 1px solid var(--cloudvbox-border-primary, #374151) !important;
                border-radius: 0.5rem !important;
                overflow: hidden !important;
            }
            
            .text_cell_render th,
            .jp-MarkdownOutput th {
                background-color: var(--cloudvbox-bg-secondary, #0f172a) !important;
                color: var(--cloudvbox-primary, #3FD1B9) !important;
                font-weight: 600 !important;
                padding: 0.75rem !important;
                border-bottom: 1px solid var(--cloudvbox-border-primary, #374151) !important;
            }
            
            .text_cell_render td,
            .jp-MarkdownOutput td {
                padding: 0.75rem !important;
                border-bottom: 1px solid var(--cloudvbox-border-primary, #374151) !important;
            }
            
            .text_cell_render tr:nth-child(even),
            .jp-MarkdownOutput tr:nth-child(even) {
                background-color: var(--cloudvbox-bg-secondary, #0f172a) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Adicionar atalhos de teclado personalizados
    function addKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Ctrl+Shift+T: Toggle tema (placeholder para futuras versões)
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                console.log('cloudvBOX Dark Theme ativo');
                
                // Mostrar notificação
                const notification = document.createElement('div');
                notification.textContent = 'cloudvBOX Dark Theme ativo';
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: var(--cloudvbox-primary, #3FD1B9);
                    color: var(--cloudvbox-bg-primary, #012837);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    z-index: 10000;
                    animation: slideIn 0.3s ease-out;
                `;
                
                document.body.appendChild(notification);
                setTimeout(() => {
                    notification.remove();
                }, 2000);
            }
        });
    }
    
    // Adicionar animações CSS
    function addAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 5px rgba(var(--cloudvbox-primary-rgb, 63, 209, 185), 0.3); }
                50% { box-shadow: 0 0 20px rgba(var(--cloudvbox-primary-rgb, 63, 209, 185), 0.6); }
            }
            
            /* Aplicar animações */
            .cell.selected,
            .jp-Cell.jp-mod-selected {
                animation: glow 2s ease-in-out infinite;
            }
            
            .cloudvbox-logo {
                animation: fadeIn 0.5s ease-in-out;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Inicializar tema
    function initTheme() {
        console.log('🚀 Inicializando cloudvBOX Dark Theme...');
        
        // Aguardar carregamento da página
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initTheme, 100);
            });
            return;
        }
        
        // Aplicar customizações
        addCloudvBoxLogo();
        addThemeIndicator();
        improveTextContrast();
        addKeyboardShortcuts();
        addAnimations();
        
        console.log('✅ cloudvBOX Dark Theme carregado com sucesso!');
    }
    
    // Inicializar quando o script for carregado
    initTheme();
    
    // Re-aplicar customizações quando necessário (para SPAs)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Verificar se novos elementos foram adicionados
                setTimeout(addCloudvBoxLogo, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
})();

