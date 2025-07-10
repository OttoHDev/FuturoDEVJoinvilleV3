package model;

import java.util.ArrayList;
import java.util.List;

public class Biblioteca {

    private final List<Livro> acervo;

    private static int totalBibliotecas = 0;

    Biblioteca(){
        this.acervo = new ArrayList<>();
        totalBibliotecas++;
    }

    public void adicionarLivro(Livro livro){
        acervo.add(livro);
    }

    public boolean emprestarLivro(String isbn){
        for(Livro livro : acervo){
            if(livro.getIsbn().equals(isbn) && !livro.isEmprestado()){
                livro.emprestar();
                return true;
            }
        }
        return false;
    }

    public boolean devolverLivro(String isbn){
        for(Livro livro : acervo){
            if(livro.getIsbn().equals(isbn) && livro.isEmprestado()){
                livro.devolver();
                return true;
            }
        }
        return false;
    }

    public int getTotalBibliotecas(){
        return totalBibliotecas;
    }

    public List<Livro> buscaPorAutor(String... autores){
        List<Livro> resultado = new ArrayList<>();

        for(Livro livro : acervo){
            for(String autor : autores){
                if(livro.getAutor().equals(autor)){
                    resultado.add(livro);
                    break;
                }
            }
        }
        return resultado;
    }

    public void exibirRelatorio(){
        System.out.println("\n---- Relatório da Biblioteca ----");
        System.out.println("Total de livros no acervo: " + acervo.size());

        System.out.println("Livros disponíveis: ");
        for(Livro livro : acervo){
            if(!livro.isEmprestado()){
                System.out.println("- " + livro.getTitulo() + "(" + livro.getAutor() + ")");
            }
        }

        System.out.println("Livros emprestados: ");
        for(Livro livro : acervo){
            if(livro.isEmprestado()){
                System.out.println("- " + livro.getTitulo() + "(" + livro.getAutor() + ")");
            }
        }
    }

}
