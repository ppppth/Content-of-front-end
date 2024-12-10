# 大文件上传

## 背景

在日常工作中，我们经常会遇到需要上传大文件（比如视频、音频、图片等）的场景。传统的上传方式一般是采用分片上传，即将文件切分成多个小片段，然后逐个上传。这样可以有效地避免网络波动或传输失败导致的文件损坏。

然而，分片上传的实现方式也有其局限性。首先，上传的效率取决于网络带宽，如果网络带宽较低，则分片上传的效率会受到影响；其次，分片上传的实现方式比较复杂，需要考虑到断点续传、并发上传等问题。

因此，业界提出了基于断点续传的大文件上传方案，即将大文件切分成固定大小的块，然后逐个上传。这样可以有效地提高上传效率，同时也降低了实现难度。

## 方案

基于断点续传的大文件上传方案，主要有以下几个步骤：

1. 客户端将大文件切分成固定大小的块，并记录每个块的偏移量和块大小。
2. 客户端将每个块上传到服务器，并记录每个块的上传状态（成功或失败）。
3. 客户端将上传状态记录到本地文件，并定期上传记录到服务器。
4. 服务器根据客户端的上传记录，将每个块拼接成完整的文件。

## 实现

下面以视频上传为例，介绍基于断点续传的大文件上传方案的实现。

1. 将大文件切分成固定大小的块，并记录每个块的偏移量和块大小。

```javascript
const spark = new SparkMD5(); // 创建SparkMD5对象
```
这行代码创建了一个新的SparkMD5对象，用于计算MD5哈希值。

```javascript
const read = (i) => { // 定义读分块函数
```
这行代码定义了一个名为`read`的函数，该函数接受一个参数`i`，表示当前处理的分块索引。

```javascript
    if (i >= chunkSize) { // 判断是否已经处理完所有分块
```
这行代码检查当前分块索引`i`是否大于或等于`chunkSize`（分块总数）。如果是，说明所有分块已经处理完毕。

```javascript
        resolve(spark.end()); // 计算哈希值
```
这行代码调用`spark.end()`方法计算最终的MD5哈希值，并通过`resolve`将结果返回。`resolve`是一个Promise的resolve函数，用于异步操作。

```javascript
        return; // 结束函数执行
```
这行代码结束当前函数的执行。

```javascript
    }
    const blob = chunks[i]; // 得到块数据，这里的chunks是通过createChunks函数创建的
```
这行代码从`chunks`数组中获取当前索引`i`对应的块数据。`chunks`是通过某种方式（例如`createChunks`函数）创建的分块数组。

```javascript
    const reader = new FileReader(); // 创建文件读取对象
```
这行代码创建了一个新的`FileReader`对象，用于读取文件数据。

```javascript
    reader.onload = (e) => { // 定义文件读取完成后的回调函数
```
这行代码定义了`FileReader`对象的`onload`事件处理函数，当文件读取完成后会调用该函数。

```javascript
        const buffer = e.target.result; // 得到块数据
```
这行代码从事件对象`e`中获取读取的块数据，数据类型为`ArrayBuffer`。

```javascript
        spark.append(buffer); // 添加块数据,把一组字节添加到md5计算中
```
这行代码将读取的块数据添加到SparkMD5对象中，用于后续的MD5哈希计算。

```javascript
        read(i + 1); // 读取下一块
```
这行代码递归调用`read`函数，处理下一个分块（索引为`i + 1`）。

```javascript
    }
    reader.readAsArrayBuffer(blob); // 读取字节流
```
这行代码调用`FileReader`的`readAsArrayBuffer`方法，以`ArrayBuffer`格式读取当前分块的数据。

```javascript
}
read(0) // 从第一个分块开始读取
```
这行代码调用`read`函数，从第一个分块（索引为0）开始处理。

总结：
这段代码的主要功能是通过递归的方式逐个读取文件的分块数据，并将每个分块的数据添加到SparkMD5对象中进行MD5哈希计算，最终得到文件的MD5哈希值。

2. reader.readAsArrayBuffer()处理分片：

使用`reader.readAsArrayBuffer(blob)`处理分片的原因是为了将文件分片数据读取为`ArrayBuffer`格式。以下是几个主要原因：

- **二进制数据处理**：`ArrayBuffer`是一种通用的、固定长度的二进制数据缓冲区。它允许你以原始字节的形式处理数据，这对于加密、哈希计算等操作非常重要。

-  **兼容性**：`ArrayBuffer`是处理二进制数据的通用格式，许多JavaScript库和API（如SparkMD5）都支持`ArrayBuffer`，因此使用`ArrayBuffer`可以确保代码的兼容性和可维护性。

- **性能**：读取为`ArrayBuffer`可以提高数据处理的性能，特别是在处理大文件时。`ArrayBuffer`允许直接操作内存中的数据，而不需要进行额外的转换。

- **精确控制**：通过使用`ArrayBuffer`，你可以更精确地控制数据的处理和操作，例如逐字节地读取和修改数据。

具体到这段代码中，使用`reader.readAsArrayBuffer(blob)`的目的是为了将文件分片数据读取为`ArrayBuffer`格式，然后将其传递给SparkMD5对象进行MD5哈希计算。这样可以确保数据的完整性和准确性，同时提高处理效率。

总结：
使用`reader.readAsArrayBuffer(blob)`处理分片是为了以二进制格式读取数据，便于后续的哈希计算和其他二进制数据处理操作。