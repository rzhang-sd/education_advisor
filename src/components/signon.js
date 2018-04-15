import React, {Component} from 'react'
import { Container, Grid, Button, Form } from 'semantic-ui-react'

class SignOnForm extends Component {

  handleSubmit = () => {
    var link = "mailto:raymond.z.zhang@gmail.com"+
             "?cc=info@ahhanetwork.com"+
             "&subject=" + escape("This is subject")+
             "&body=" + escape("This is body");
    window.location.href = link;
  }

  render() {
      return (
        <Container>
        <Grid>
        <Grid.Row centered columns={1}>
          <Grid.Column width={16}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input label='First name' placeholder='First name' />
                <Form.Input label='Last name' placeholder='Last name' />
                <Form.Input label='Address' placeholder='Address' />
                <Form.Input label='Phone' placeholder='Phone' />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button type='submit'>Submit</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
      )
  }
}

export default SignOnForm
