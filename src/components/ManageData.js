import React, {Component} from 'react'
import styled from 'styled-components'

class ManageData extends React.Component {

  constructor(props){
    super(props);
    this.state={
      act: 0,
      index: '',
      datas: [
        {
          id: 'user_id',
          name: 'user_id',
          description: 'Contains the primary key used to identity a user of the system.',
          type: 'Contains the primary key used to identity a user of the system.',
          sensitivity: 'true',
          active: 'active'
        },
        {
          id: 'user_id',
          name: 'item_id',
          description: 'Contains the primary key used to identity a user of the system.',
          type: 'Contains the primary key used to identity a user of the system.',
          sensitivity: 'true'
        },
        {
          id: 'user_email',
          name: 'user_email',
          description: 'Contains the primary key used to identity a user of the system.',
          type: 'Contains the primary key used to identity a user of the system.',
          sensitivity: 'true'
        },
        {
          id: 'item_views',
          name: 'item_views',
          description: 'Contains the primary key used to identity a user of the system.',
          type: 'Contains the primary key used to identity a user of the system.',
          sensitivity: 'true'
        } ,
        {
          id: 'item_favorites',
          name: 'item_favorites',
          description: 'Contains the primary key used to identity a user of the system.',
          type: 'Contains the primary key used to identity a user of the system.',
          sensitivity: 'true'
        } 
      ],
      
    }
  }

  edit = (e) => {
    e.preventDefault()
    var edit = document.getElementsByClassName('edit')
    for (var i = 0; i < edit.length; i++) {
      edit[i].classList.add('active')
    }

    var data = document.getElementsByClassName('data')
    console.log(data)
    for(var i = 0; i < data.length; i++) {
      data[i].classList.add('active')
    }

    var btnSave = document.getElementById('btnSave')
    btnSave.style.display = "block"

    var btnEdit = document.getElementById('btnEdit')
    btnEdit.style.display = "none"
  }

  save = (e) => {
    e.preventDefault()
    var edit = document.getElementsByClassName('edit')
    for (var i = 0; i < edit.length; i++) {
      edit[i].classList.remove('active')
    }

    var dataHtml = document.getElementsByClassName('data')
    for(var i = 0; i < dataHtml.length; i++) {
      dataHtml[i].classList.remove('active')
    }

    var btnSave = document.getElementById('btnSave')
    btnSave.style.display = "none"

    var btnEdit = document.getElementById('btnEdit')
    btnEdit.style.display = "block"

    let datas = this.state.datas
    // let user_id = this.refs.user_id.value
    // let user_description = this.refs.user_description.value
    // let user_type = this.refs.user_type.value
    // let user_sensitivity = this.refs.user_sensitivity.value

    // let data = {
    //    user_id, user_description, user_type, user_sensitivity
    // }

    // datas.push(data)

    // this.setState({
    //   datas: datas
    // })
  }

  show = (i) => {
    let data = this.state.datas[i];
    this.refs.id.value = data.name;
    this.refs.description.value = data.description
    this.refs.type.value = data.type
    this.refs.sensitivity.value = data.sensitivity
  }

  render () {
    const datas = this.state.datas
    return <div>
            <Title>Manage data</Title>
            <Container>
              <Sidebar className="ul">
                  {datas.map((data, i) => 
                  <Li key={i} className="li">
                      <Link onClick={()=>this.show(i)} className={data.active}>
                        {data.name}
                      </Link>
                  </Li>
                  )}
                  
                  <BtnAdd>+ Add key</BtnAdd>
              </Sidebar>
              <Main>
                <form>
                  <H3 ref="h3">
                    <div className="data">
                      <p>user_id</p>
                    </div>
                    <div className="edit">
                      <p>Key name</p>
                      <input 
                        type="text" 
                        ref="id"
                        placeholder="Id" />
                    </div>
                  </H3>
                  <Item>
                    <div className="data">
                      <h4>Description</h4>
                      <p ref="description">Contains the primary key used to identity a user of the system.</p>
                    </div>
                    <div className="edit">
                      <p>Description</p>
                      <input 
                        type="textarea" 
                        ref="description" placeholder="Description" />
                    </div>
                  </Item>
                  <Item>
                    <div className="data">
                      <h4>Type</h4>
                      <p ref="type">Contains the primary key used to identity a user of the system.</p>
                    </div>
                    <div className="edit">
                      <p>Type</p>
                      <input 
                        type="text" 
                        ref="type" />
                    </div>
                  </Item>
                  <Item>
                    <div className="data">
                      <h4>Sensitivity</h4>
                      <p ref="sensitivity" >This is personal data, and cannot be distributed in raw form.</p>
                    </div>
                    <div className="edit">
                      <p>Is this personal data?</p>
                      <input 
                        type="text" ref="sensitivity" />
                    </div>
                  </Item>

                  <BtnEdit onClick={this.edit} id="btnEdit">Edit this</BtnEdit>
                  <BtnSave onClick={this.save} id="btnSave">Save</BtnSave>

                </form>
                <div>
                  <PossibleValues>POSSIBLE VALUES</PossibleValues>
                  <Header>
                    <p>VALUE</p>
                    <p>DESCRIPTION</p>
                  </Header>
                  <Content>
                    <li>
                      <p>null</p>
                      <p>Value when user is not found</p>
                    </li>
                    <li>
                      <p>(integer)</p>
                      <p>ID key of user</p>
                    </li>
                  </Content>
                </div>
              </Main>
            </Container>
          </div>
  }
}

export default ManageData

const Title = styled.h1`
  font-size: 20px;
  text-align: left;
`;
const Container = styled.div`
  display: flex;
  padding-top: 10px;
  text-align: left;
`
const Sidebar = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 30%;
`
const Li = styled.li`
  width: 100%;
  background: black;
`
const Link = styled.a`
  padding: 10px;
  width: 100%;
  display: block;
  color: white;
  font-size: 14px;
  transition: .25s linear;
  cursor: pointer;
  &:hover,
  &.active {
      color: white;
      background: #7a8900;
  }
`
const BtnAdd = styled.a`
  margin-top: 5px;
  padding: 8px 10px;
  color: #7a8900;
  transition: .25s linear;
  cursor: pointer;
  border: 2px solid #7a8900;
  display: inline-block;
  width: 100px;
  &:hover {
      color: white;
      background: #7a8900;
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 78%;
  margin-left: 2%;
  border: .5px solid #7a8900;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
`
const H3 = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  .edit {
    display: none;
  }
  .active {
    display: block;
  }
  .data {
    &.active {
      display: none;
    }
  }
`
const BtnEdit =styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 8px 10px;
  background: #7a8900;
  color: white;
  transition: .25s linear;
  cursor: pointer;
  border: 2px solid #7a8900;
  display: inline-block;
  width: 100px;
  &:hover {
      color: #7a8900;
      background: white;
      border: 2px solid #7a8900;
  }
`
const BtnSave =styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 8px 10px;
  background: #7a8900;
  color: white;
  transition: .25s linear;
  cursor: pointer;
  border: 2px solid #7a8900;
  display: inline-block;
  width: 100px;
  display: none;
  &:hover {
      color: #7a8900;
      background: white;
      border: 2px solid #7a8900;
  }
  .active {
    display: block;
  }
`
const Item = styled.div`
  margin: 30px 0;
  h4 {
    font-weight: 300;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
  .edit {
    display: none;
  }
  .active {
    display: block;
  }
  .data {
    display: block;
    &.active {
      display: none;
    }
  }
`
const PossibleValues = styled.h3`
  color: white;
  text-transform: uppercase;
  background: #7a8900;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`
const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  p {
    width: 40%;
    font-size: 14px;
    &:last-child {
      width: 60%;
    }
  }
`
const Content = styled.div`
  li {
    list-style: none;
    margin-bottom: 10px;
    display: flex;
    p {
      width: 40%;
      font-size: 14px;
      &:last-child {
        width: 60%;
      }
    }
  }
`