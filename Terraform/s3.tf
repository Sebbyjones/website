provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "portfolio_site" {
  bucket = "sebastian-latempa-personal-site"
}

resource "aws_s3_bucket_website_configuration" "portfolio_site_config" {
  bucket = aws_s3_bucket.portfolio_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.portfolio_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.portfolio_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.portfolio_site.arn}/*"
      }
    ]
  })
}