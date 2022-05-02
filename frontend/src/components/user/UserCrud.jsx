import React, {components} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir!'
}

// Estado inicial do componente p/ quando clicado na opção 'cancelar' voltar para o estado inicial (no formulario de user)
// inserido a URl do backend 

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    
    state = { ...initialState }

    // função Clear vai ser responsavel por limpar o formulario, quando clicar no botao cancelar vai chamar a função
    // Neste caso vai limpar o formulario e nao a lista ou seja o User
    clear (){
        this.setState({user: initialState.user})
    }

    // função vai servir p/ incluir e p/ alterar um user existente
    // incluir = post / alterar = put
    
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        // url vai variar / passar a id do user quando fizer um put 
        const url = user.id ? `${baseUrl} / ${user.id}` : baseUrl
        axios[method](url, user).then(resp => {
            const list = this.getUpdateList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    getUpdateList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list  
    } 

    render(){
        return (
            <Main {...headerProps}>
                {/* Alterar aqui o nome para Cadastro de Startup = Componente de cadastro */}
                Cadastro de Usuário
            </Main>
        )
    }
}