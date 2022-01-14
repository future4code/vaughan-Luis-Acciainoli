import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  padding: 14px
  border-radius: 5px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/51/51",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "junior",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/201/151",
      },
      {
        nomeUsuario: "alfredo",
        fotoUsuario: "https://picsum.photos/52/50",
        fotoPost: "https://picsum.photos/202/152",
      },
    ],

    InputUser: "",
    InputFoto: "",
    InputFotoPost: "",
  };

  criarPost = () => {
    const criaPost = {
      nomeUsuario: this.state.InputUser,
      fotoUsuario: this.state.InputFoto,
      fotoPost: this.state.InputFotoPost,
    };

    const criaPosts = [...this.state.posts, criaPost];
    this.setState({ postList: criaPosts });
  };

  onChangeInputUser = (event) => {
    this.setState({ InputUser: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ InputFoto: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ InputFotoPost: event.target.value });
  };

  render() {
    const listarPosts = this.state.posts.map((post, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        {listarPosts}

        <div>
          <Input
            value={this.state.InputUser}
            onChange={this.onChangeInputUser}
            placeholder={"Usuário"}
          />

          <Input
            value={this.state.InputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Perfil"}
          />

          <Input
            value={this.state.InputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Valor do post"}
          />

          <button onClick={this.criarPost}>Novo Post</button>
        </div>
      </MainContainer>
    );
  }
}

export default App;
