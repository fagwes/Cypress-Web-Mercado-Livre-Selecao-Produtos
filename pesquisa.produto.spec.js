
/// <reference types = "cypress"/>
describe ('realizar pesquisa não logado', () => {

   
    
    it ('realizar pesquisa de produto', () =>{

        //Site//
        cy.visit('https://www.mercadolivre.com.br/')

        //Produto//
        cy.get(':nth-child(3) > .dynamic__carousel > .dynamic-carousel-normal-desktop > .carousel-container > .slick-initialized > .slick-list > .slick-track > [data-index="0"] > .andes-card > .dynamic-carousel__item-container > a > .dynamic-carousel__link-container > .dynamic-carousel__img').click()

        //Cep (Mais tarde)//
        cy.get('.andes-tooltip__buttons > .andes-button--transparent > .andes-button__content').click()

        //Cookies//
        cy.get('[data-testid="action:understood-button"]').click()

        //Cor do produto//
        cy.get('[href="/MLB-1919522391-jogo-de-toalhas-buddemeyer-fio-pentclassic-banho-bege-4pcs-_JM?attributes=COLOR_SECONDARY_COLOR:MDA1IC0gQXp1bCBDbGFyby9BenVs"] > .ui-pdp-thumbnail__picture > .ui-pdp-image').click()


        //Tirar evidência//

        cy.screenshot()
        

         });
    
    });