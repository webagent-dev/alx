import React from "react"
import {
  Container,
  Wrapper,
  First,
  Second,
  Head,
  List,
  Item,
  Link,
  Underline,
  Color,
} from "./table.style"
import { bgs } from "../../file"
function Table() {
  return (
    <Container
      bg={
        bgs
      }
    >
      <Wrapper>
        <First>
          <Head>
            <Color>
              Table
            </Color>
            of
            Contents
          </Head>
          <Underline />
        </First>
        <Second>
          <List type="1">
            <Link href="#">
              <Item>
                Introduction
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Our
                Goal
              </Item>
            </Link>
            <Link href="#">
              <Item>
                The
                Program
                Objectives
              </Item>
            </Link>
            <Link href="#">
              <Item>
                How
                This
                Program
                Works
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Your
                Learning
                Curriculum
              </Item>
            </Link>
            <Link href="#">
              <Item>
                The
                Programme
                Framework
              </Item>
            </Link>
            <Link href="#">
              <Item>
                The
                Programme
                Structure
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Intranet
                101
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Project/Task
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Engagement
                Activities:
                Students
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Programme
                Modalities
              </Item>
            </Link>
            <Link href="#">
              <Item>
                Your
                Learning
                Community
              </Item>
            </Link>
          </List>
        </Second>
      </Wrapper>
    </Container>
  )
}

export default Table
