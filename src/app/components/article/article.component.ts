import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../helpers/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(): void {
    this.articleService.getArticles().subscribe((data) => this.articles = data);
  }
}
