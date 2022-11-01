import { useState, FormEvent } from 'react';

import { 
  Grid, 
  GridItem,
  VStack, 
  useToast, 
  Spinner, 
  useColorModeValue 
} from "@chakra-ui/react";

import { Input } from './Input';
import { TextArea } from './TextArea';
import { Heading } from '../Heading';
import { ButtonPink } from '../ButtonPink';
import axios from 'axios';

export function FormContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      setLoading(true);

      if (!name || !email  || !message) {
        toast({
          title: 'Erro ao enviar mensagem',
          description: "Por favor, preencha todos os campos.",
          status: 'error',
          duration: 6000,
          position: "top",
          isClosable: true,
        })
        return;
      } 

      const data = {
        name,
        email,
        message,
      }

      await axios.post("/api/sendMessage", data);

      toast({
        title: 'Mensagem enviada',
        description: "Sua mensagem foi enviada com sucesso, logo retornaremos.",
        status: 'success',
        duration: 6000,
        position: "top",
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: "Ocorreu um erro ao enviar sua mensagem, tente novamente.",
        status: 'error',
        duration: 6000,
        position: "top",
        isClosable: true,
      })
    } finally {
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false)
    }
  }

  return (
    <VStack
      w="100%"
      maxWidth="1140px"
      marginX="0 auto"
      paddingY={["80px", "140px", "200px", "200px"]}
      px="52px"
      data-aos="fade-up"
    >
      <Heading
        title='Entre em contato' 
        textAlign={["center", "center", "start", "start"]}
        marginBottom={["40px", "80px", "100px", "100px"]}
      />

      <Grid 
        as="form" 
        onSubmit={handleSubmit}
        w="100%"
        templateColumns={["repeat(2, 1fr)"]}
        gap={8}
        data-aos="zoom-in"
      >
          <GridItem>
            <Input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Nome" 
              type="text" 
            />
          </GridItem>

          <GridItem>
            <Input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="E-mail" 
              type="email" 
            />
          </GridItem>

          <GridItem colSpan={2}>
            <TextArea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Insira sua mensagem" 
            />
          </GridItem>
          
          <GridItem>
            <ButtonPink 
              type="submit" 
              title={ loading === true ? <Spinner color={useColorModeValue("white.100", "gray.300")} /> : "Enviar"} 
              disabled={loading && true} 
            />
          </GridItem>
          a
      </Grid>
    </VStack>
  );
}